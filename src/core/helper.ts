import Web3 from "web3"
import { EVMTaskAllocator } from "~/core/constants"


export function checkTaskInfoForEVM(task: string, schema: string, validatorAddress: string, signature: string) {
  const web3 = new Web3()

  const encodeParams = web3.eth.abi.encodeParameters(
    ["bytes32", "bytes32", "address"],
    [task, schema, validatorAddress]
  )
  const paramsHash = Web3.utils.soliditySha3(encodeParams) as string
  const signedAllocatorAddress = web3.eth.accounts.recover(paramsHash, signature)

  return EVMTaskAllocator === signedAllocatorAddress
}

export function verifyEVMMessageSignature(
  taskId: string,
  schema: string,
  uHash: string,
  publicFieldsHash: string,
  signature: string,
  originAddress: string,
  recipient?: string
) {
  const web3 = new Web3()

  const types = ["bytes32", "bytes32", "bytes32", "bytes32"]
  const values = [Web3.utils.stringToHex(taskId), Web3.utils.stringToHex(schema), uHash, publicFieldsHash]

  if (recipient) {
    types.push("address")
    values.push(recipient)
  }

  const encodeParams = web3.eth.abi.encodeParameters(types, values)

  const paramsHash = Web3.utils.soliditySha3(encodeParams) as string

  const nodeAddress = web3.eth.accounts.recover(paramsHash, signature)
  return nodeAddress === originAddress
}

const hexToBytes = (hex: string) => {
  const bytes = [];
  for (let c = 0; c < hex.length; c += 2) bytes.push(parseInt(hex.substring(c, c + 2), 16));
  return new Uint8Array(bytes);
};
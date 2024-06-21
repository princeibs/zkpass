"use client"
import { useState } from "react"
import { ethers } from "ethers"
import TransgateConnect from "@zkpass/transgate-js-sdk"

// Local imports
import AttestationABI from "./AttestationABI.json"
import { AttestationContractAddr } from "~/core/constants"

/**
 * Custom React hook to interact with Ethereum blockchain using zkPass TransGate.
 * Provides functionality to initialize a connection, launch a schema, and send a transaction.
 *
 * @returns {object} Hook state and functions.
 */
export function useTransgate() {
  const [result, setResult] = useState<any>()

  /**
   * Initiates the process to connect to the Ethereum blockchain, launch a schema, and send a transaction.
   * Accepts appId and schemaId as parameters to connect and interact with the blockchain.
   * 
   * @param {string} appId - The application ID used to initialize the TransgateConnect.
   * @param {string} schemaId - The schema ID used to launch the operation on the blockchain.
  */
  const startZK = async (appId: string, schemaId: string) => {
    try {
      const connector = new TransgateConnect(appId)
      const isAvailable = await connector.isTransgateAvailable()
      if (!isAvailable) {
        alert("Please install zkPass TransGate")
        return
      }
      //@ts-ignore
      if (window.ethereum == null) {
        alert("MetaMask not installed")
        return
      }
      //@ts-ignore
      const provider = new ethers.BrowserProvider(window.ethereum)
      const signer = await provider.getSigner()
      const account = await signer.getAddress()

      const res: any = await connector.launch(schemaId, account)
      setResult(res)

      const taskId = ethers.hexlify(ethers.toUtf8Bytes(res.taskId))
      const encodedSchemaId = ethers.hexlify(ethers.toUtf8Bytes(schemaId))

      const chainParams = {
        taskId,
        schemaId: encodedSchemaId,
        uHash: res.uHash,
        recipient: account,
        publicFieldsHash: res.publicFieldsHash,
        validator: res.validatorAddress,
        allocatorSignature: res.allocatorSignature,
        validatorSignature: res.validatorSignature,
      }

      const contract = new ethers.Contract(AttestationContractAddr, AttestationABI, provider)
      const data = contract.interface.encodeFunctionData("attest", [chainParams])

      let transaction = {
        to: AttestationContractAddr,
        from: account,
        value: 0,
        data,
      }

      let tx = await signer.sendTransaction(transaction)
      alert('Transaction sent successfully!')
    } catch (err) {
      alert(JSON.stringify(err))
    }
  }

  return {
    result,
    startZK,
  }
}

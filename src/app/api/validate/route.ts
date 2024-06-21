export async function GET(req: Request) {

  try {
    const farmlandKYCData = {
      id: 6006784,
      complete: true,
      purpose: "compare",
      country: null,
      author: "cameron@usesmileid.com",
      links: {
        TargetImages: {
          0: {
            FileName: "http://localhost:4000/SID_IDCard.jpeg",
            s3Bucket: "smile-results-prod",
          },
          1: {
            FileName: "http://localhost:4000/SID_IDCard.jpeg",
            s3Bucket: "smile-results-prod",
          },
        },
        s3SourceImage: "http://localhost:4000/SID_Preview_Full.jpeg",
        s3SourceBucket: "smile-results-prod",
        s3ResultsFolder: "",
      },
      updated_at: "2024-05-24T05:40:31.932Z",
      first_sent_at: null,
      latest_updated_review_result: "2024-05-24T05:39:47.050Z",
      machine_conf_value: null,
      job: {
        id: 9,
        job_id: "0000000009",
        partner_id: "002",
        partner_params: {
          job_id: "partner_job 1_9",
          user_id: "partner_user_id_1",
          job_type: 1,
        },
        created_at: "2024-05-24T05:39:46.932Z",
      },
      smile_reference: {
        result: {
          Errors: [],
          ResultText: "Human Result: Probably Same Person",
          ResultType: "SmileID Reviewed Result",
          SmileJobID: "0000000009",
          IsFinalResult: "false",
          PartnerParams: {
            job_id: "partner_job 1_9",
            user_id: "partner_user_id_1",
            job_type: 1,
          },
          ConfidenceValue: "75",
          IsMachineResult: "false",
        },
        internal: {
          Links: {
            s3SourceImage: "http://localhost:4000/SID_Preview_Full.jpeg",
            s3TargetImage: "http://localhost:4000/SID_IDCard.jpeg",
            s3SourceBucket: "smile-results-prod",
            s3TargetBucket: "smile-results-prod",
            s3ResultsFolder: "",
          },
          Nonce: "bYP14CdKvjePaoHeO1DtgnswUNenN5",
          Payload: {
            Author: "reviewer@smileid.co",
            Errors: [],
            PayloadV2: {
              0: {
                Errors: [],
                ReviewText: "Human Result: Probably Same Person",
                ReviewType: "0802",
                PayloadType: "1312",
                ConfidenceValue: "75",
              },
              NumV2Payloads: "1",
            },
            ReviewText: "Human Result: Probably Same Person",
            ConfidenceValue: "75",
          },
        },
      },
      images: {
        source: null,
        target: null,
      },
      source: "http://localhost:4000/SID_Preview_Full.jpeg",
      targets: ["http://localhost:4000/SID_IDCard.jpeg"],
      property_verification: {
        land_title_code: "LT-2024-GHA-009876",
        owner_full_name: "Kwabena Makosa",
        address: "123 Kosi Lane, Abokobi, FV 20356 Greater Accra",
        registry_office: "Ghana Land Registry",
        verification_status: "Pending",
        verification_date: null
      }
    };

    return new Response(JSON.stringify(farmlandKYCData))
  } catch (error) {
    return new Response(null, { status: 500 })
  }
}
import generateSignedUrl from '../s3'

export const videoController = async (request:any, response:any) => {
    const url = await generateSignedUrl();
    response.status(200).json({ url })
}
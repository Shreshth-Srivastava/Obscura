import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { success } from "zod";

export async function POST(request: Request){
    await dbConnect()

    try {
        const {username, code} = await request.json()

        // for the GET approach
        const decodedUsername = decodeURIComponent(username)

        const user = await UserModel.findOne({username: decodedUsername})

        if(!user){
            return Response.json({
                success: false,
                message: "User does not exist",
            },{status: 500})
        }

        const isCodeValid = user.verifyCode === code
        const isCodeNotExpired = new Date(user.verifyCodeExpiry) > new Date()

        if (isCodeValid && isCodeNotExpired) {
            user.isVerified = true
            await user.save()

            return Response.json({
                success: true,
                message: "User verified successfully",
            }, {status: 200})
        } else if(!isCodeNotExpired){
            return Response.json({
                success: false,
                message: "Verification code has expired, please signup again to get a new code",
            }, {status: 400})
        } else{
            return Response.json({
                success: false,
                message: "Incorrect code",
            }, {status: 400})
        }

    } catch (error) {
        console.error("Error verifying the code", error)
        return Response.json({
            success: false,
            message: "Error verifying the code",
        },{status: 500})
    }
}

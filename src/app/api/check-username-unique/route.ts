import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import {z as e, success} from "zod"
import { usernameValidation } from "@/schemas/signUpSchema";

const UsernameQuerySchema = e.object({
    username: usernameValidation
})

export async function GET(request: Request){
    await dbConnect()

    try {
        const {searchParams} = new URL(request.url)
        const queryParams = {
            username: searchParams.get('username')
        }
        const result = UsernameQuerySchema.safeParse(queryParams)
        // console.log("Checking username: ", result.data?.username);
        // console.log("result.success: ", result.success);

        if(!result.success){
            const Err = e.treeifyError(result.error)
            const usernameErr = Err.properties?.username?.errors || []
            // const usernameErr = result.error.format().username?._errors || []

            // console.log("Error: ", Err);

            return Response.json({
                success: false,
                message: usernameErr?.length > 0 ? usernameErr.join(', ') : "Invalid query parameters"
            },
            {
                status: 400
            })
        }

        const {username} = result.data
        const existingVerifiedUser = await UserModel.findOne({username, isVerified:true})

        if (existingVerifiedUser) {
            return Response.json({
                success:false,
                message: "Username is already taken",
            },
            {
                status: 400
            })
        }

        return Response.json({
            success: true,
            message: "Username is available",
        }, {status: 200})

    } catch (error) {
        console.error("Error checking username", error)
        return Response.json(
            {
                success: false,
                message: "Error checking username"
            },
            {
                status: 500
            }
        )
    }
}

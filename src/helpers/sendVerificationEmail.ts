import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
        from: 'you@example.com',
        to: email,
        subject: 'Obscura Verification Code',
        react: VerificationEmail({username, otp: verifyCode}),
    })
    return {
      success: true,
      message: "Verification email sent successfully",
    };
  } catch (e) {
    console.error("Error sending verification email", e);
    return {
      success: false,
      message: "Failed to send verification email",
    };
  }
}

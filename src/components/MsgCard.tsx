"use client"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Button } from "./ui/button"
import { X } from "lucide-react"
import { Message } from "@/model/User"
import { toast } from "sonner"
import axios from "axios"
import { ApiResponse } from "@/types/ApiResponse"

type MsgCardProps = {
    msg: Message,
    onMsgDelete: (msgId: string) => void
}

const MsgCard = ({msg, onMsgDelete}: MsgCardProps) => {
    const handleDeleteConfirm = async () => {
        const response = axios.delete<ApiResponse>(`api/delete-message/${msg._id}`);
        toast.info((await response).data.message);
        onMsgDelete(msg._id as string);
    }

    return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{msg.content}</CardTitle>
        <br />
        <AlertDialog>
        <AlertDialogTrigger asChild>
            <Button variant="destructive"><X className="w-5 h-5" /></Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
                This action cannot be undone. This will permanently delete this data from our servers.
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteConfirm}>Continue</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
      </CardHeader>
      </Card>
  )
}

export default MsgCard

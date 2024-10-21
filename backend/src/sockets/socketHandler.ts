import { Socket, Server } from "socket.io";
import { CommentService } from "../services/CommentService";
import Container from "typedi";

export const socketHandler = (io: Server) => {

    const commentService = Container.get(CommentService);

    io.on("connection", (socket: Socket) => {
        console.log("A user is connected", socket.id);
    
        socket.on("comment:add", async (data) => {
            try {
                const savedComment = await commentService.saveCommentToDatabase(data);
                io.emit("comment:new", savedComment);
            } catch (error) {
                console.error("Error saving comment: ", error);
                socket.emit("comment:error", "Failed to save comment"); 
            }
        });

        socket.on("disconnect", () => {
            console.log("A user is disconnected", socket.id);
        });
    });
}

import { Socket, Server } from "socket.io";
import { CommentService } from "../services/CommentService";
import container from "../container";

export const socketHandler = (io: Server) => {

    io.on("connection", (socket: Socket) => {
        console.log("A user is connected", socket.id);

        const commentService = container.resolve<CommentService>("commentService");
    
        socket.on("comment:add", async (data) => {
            try {
                const savedComment = await commentService.createComment(data);
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

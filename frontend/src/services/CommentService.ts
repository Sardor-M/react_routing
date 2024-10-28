import axios from "axios";

const API_URL = "http://localhost:8080/api/comments";

export const CommentService = {

    async getCommentsByEventId(eventId: number) {
        const response = await axios.get(`${API_URL}/${eventId}`);
        return response.data;
    },

    async addComment(comment: {content: string, userId: number}) {
        await axios.post(API_URL, comment);
    },

    async deleteComment(commentId: number) {
        await axios.delete(`${API_URL}/${commentId}`);
    },

    async editComment(commentId: number, content: string) {
        return axios.put(`${API_URL}/${commentId}`, {content});
    }
};

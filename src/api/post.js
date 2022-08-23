import domainurl from "../domainAPI";

export async function getAllPosts() {
    try {
        const res = await domainurl.get();
        console.log(res.data.content);
        return { error: false, data: res.data.content }
    }
    catch (error) {
        console.log(error);
        return { error: true }
    }
}

export async function getPost(id) {
    try {
        const res = await domainurl.get(`/${id}`);
        console.log(res);
    }
    catch (error) {
        console.log(error);
        return { error: true }
    }
}
const PostModel = require('../models/post.model');
const {
  responseOk,
  responseNoContent,
  responseInternalServerError,
  responseBadRequest
} = require('../../../commons/response/common.response');

class PostService {
  constructor() {
    this.postModel = new PostModel();
  }

  async create(data){
    const postData = this.mappingPostData(data);
    const postCreate = await this.postModel.create(postData);
    if(postCreate.errorCode) {
      return responseInternalServerError(postCreate.errorCode)
    }

    return responseOk(postCreate);
  }

  async list(){
    const posts = await this.postModel.list();
    if(posts.errorCode){
      return responseInternalServerError(posts.errorCode)
    }

    return responseOk(posts)
  }

  async detail(postId){
    const post = await this.postModel.getPostById(postId);
    if(post.errorCode){
      return responseInternalServerError(post.errorCode);
    }
    if(post.length <= 0){
      return responseBadRequest(`Post with id ${postId} not found`);
    }

    return responseOk(post[0]);
  }

  async update(postId, data){
    const postData = this.mappingPostData(data);
    const postUpdate = this.postModel.updatePostById(postId, postData);

    if(postUpdate.errorCode) return responseInternalServerError(postUpdate.errorCode);
    return responseNoContent();
  }

  async delete(postId){
    const postData = {
      is_active: 0
    }
    const postDelete = this.postModel.updatePostById(postId, postData);
    if(postDelete.errorCode) return responseInternalServerError(postDelete.errorCode)

    return responseNoContent();
  }

  async getBySlug(slug){
    const post = await this.postModel.getBySlug(slug);
    if(post.errorCode){
      return responseInternalServerError(post.errorCode);
    }

    return responseOk(post[0]);

  }

  mappingPostData(data){
    return {
      content: data.post,
      excerpt: data.excerpt,
      publish: +data.publish,
      title: data.title,
      slug: data.permalink,
      category_id: data.category,
      thumbnail: data.thumbnail,
    }
  }
}

module.exports = PostService;
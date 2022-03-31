const PostService = require('../services/post.service');

class PostController {
  constructor() {
    this.postService = new PostService();
    this.create = this.create.bind(this);
    this.list = this.list.bind(this);
    this.detail = this.detail.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.getBySlug = this.getBySlug.bind(this);
  }

  async create(req, res, next){
    const result = await this.postService.create(req.body);
    res.status(result.httpCode).send(result.data || result.errorCode);
  }

  async list(req, res, next){
    const result = await this.postService.list();
    res.status(result.httpCode).send(result.data || result.errorCode);
  }

  async detail(req, res, next){
    const postId = req.params.id;
    const result = await this.postService.detail(postId);
    res.status(result.httpCode).send(result.data || result.errorCode);
  }

  async update(req, res, next){
    const postId = req.params.id;
    const postData = req.body;
    const result = await this.postService.update(postId, postData);
    res.status(result.httpCode).send(result.data || result.errorCode);
  }

  async delete(req, res, next){
    const postId = req.params.id;
    const result = await this.postService.delete(postId);
    res.status(result.httpCode).send(result.data || result.errorCode);
  }

  async getBySlug(req, res, next){
    const slug = req.params.slug;
    const result = await this.postService.getBySlug(slug);
    res.status(result.httpCode).send(result.data || result.errorCode);
  }

}

module.exports = PostController;
const DBService = require('../../../commons/database/db.service')

class PostModel {
  constructor() {
    this.dbService = new DBService();
    this.postTableName = 'posts';
    this.categoryTableName = 'categories';
    this.userTableName = 'users';
  }

  create(data){
    const query = `INSERT INTO ${this.postTableName} SET ?`;
    return this.dbService.query(query, [data]);
  }

  list(){
    const query = `SELECT 
        p.*, 
        c.category 
      FROM ${this.postTableName} p
      LEFT JOIN ${this.categoryTableName} c ON c.id = p.category_id
      WHERE p.is_active = 1
      ORDER BY id DESC`;
    return this.dbService.query(query);
  }

  updatePostById(postId, data){
    const query = `UPDATE ${this.postTableName}
      SET ?
      WHERE id = ?`;

    return this.dbService.update(query, [data, postId])
  }

  getPostById(postId){
    const query = `SELECT 
        p.*,
        c.category,
        u.name as author
      FROM ${this.postTableName} p 
      LEFT JOIN ${this.categoryTableName} c ON c.id = p.category_id
      LEFT JOIN ${this.userTableName} u ON u.id = p.updated_by
      WHERE p.id = ?`;
    return this.dbService.query(query, [postId]);
  }

  getBySlug(slug){
    const query = `SELECT 
        p.*,
        c.category,
        u.name as author
      FROM ${this.postTableName} p 
      LEFT JOIN ${this.categoryTableName} c ON c.id = p.category_id
      LEFT JOIN ${this.userTableName} u ON u.id = p.updated_by
      WHERE p.slug = ?`;
    return this.dbService.query(query, [slug]);
  }

}

module.exports = PostModel;
import Post from './Post.js';
import fileService from './fileService.js';

class PostService {
  async create(post, file) {
    const fileName = fileService.saveFile(file);
    const result = await Post.create({...post, picture: fileName});
    return result;
  }
  async getAll() {
    const result = await Post.find();
    return result;
  }
  async getOne(id) {
    if (!id){
      throw new Error('id не зазначений')
    }
    const result = await Post.findOne({_id: id});
    return result;
  }
  async update(id, post) {
    if(!id){
      throw new Error('id не зазначений')
    }
    const result = await Post.findOneAndUpdate({_id: id}, {$set: post}, {returnDocument: 'after'})
    return result;
  }
  async updateUb(post) {
    if(!post._id){
      throw new Error('id не зазначений');
    }
    const result = await Post.findByIdAndUpdate(post._id, post, {new: true});
    return result;
  }
  async delete(id) {
    if (!id){
      throw new Error('id не зазначений')
    }
    const result = await Post.findOneAndRemove({_id: id});
    return result;
  }
}


export default new PostService();
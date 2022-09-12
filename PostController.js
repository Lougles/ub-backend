import PostService from './PostService.js';


class PostController {
  async create(req,res) {
    try {
      const result = await PostService.create(req.body, req.files.picture);
      return res.json(result);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async getAll(req,res) {
    try {
      const result = await PostService.getAll();
      return res.json(result);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async getOne(req,res) {
    try {
      const {id} = req.params;
      const result = await PostService.getOne(id);
      return res.json(result);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async update(req,res) {
    try {
      const {id} = req.params;
      const result = await PostService.update(id, req.body);
      return res.json(result);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async updateUb(req,res) {
    try {
      const result = await PostService.updateUb(req.body);
      return res.json(result);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async delete(req,res) {
    try {
      const {id} = req.params;
      const result = await PostService.delete(id);
      return res.json(result);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}
export default new PostController();
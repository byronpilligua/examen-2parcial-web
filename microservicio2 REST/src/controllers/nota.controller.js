const { NotasModel } = require('../models');

class VentaController {

    async getAll(req, res) {
        const notas = await NotasModel.find()
        res.json(notas)
    }

    async add(req, res) {
        const nota = new NotasModel(req.body)
        await nota.save()
        res.json({ msg: "guardado exitoso" })
    }

    async update(req, res) {
        const { body } = req;
        const { nota_id } = req.params;
        await NotasModel.findByIdAndUpdate(nota_id, body);
        res.json({ msg: "editado" })
    }

    async delete(req, res) {
        const { nota_id } = req.params;
        await NotasModel.deleteMany({ _id: nota_id });
        res.json({ msg: eliminado })
    }

    async getOne(req, res) {
        const { nota_id } = req.params;
        const nota = await NotasModel.findById(nota_id);
        res.json(nota)
    }

}

module.exports = new VentaController();
const { MatriculaModel, NotasModel } = require('../models');

class MatriculaController{
    async filtrar(req, res){
            const pedidos = await MatriculaModel.find({fecha_pedido: { $gte: req.body.inicio, $lt: req.body.fin },estado:'pendiente'})
            pedidos.forEach(pedido => {
                let datos = {
                    nombre:pedido.nombre,
                    cursomatriculado:pedido.cursomatriculado,
                    horario:pedido.horario,
                    fecha:pedido.fecha,
                    notapractica:0,
                    notateoria:0,
                    promedio:0
                }
                const nota = new NotasModel(datos)
                nota.save()
            }); 
            res.json({msg="transferido"})
    }
}

module.exports = new MatriculaController();
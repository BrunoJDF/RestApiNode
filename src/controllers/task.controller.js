import Task from "../models/Task";

export async function createTask(req, res){
    const { name, done, project_id } = req.body;

    try {
        let newTask = await Task.create({
            name,
            done,
            project_id
        }, {
            fields: [
                'name',
                'done',
                'project_id'
            ]
        });
        if (newTask) {
            res.json({
                message: 'Task created successfully',
                data: newTask
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Something goes wrong',
            data: {}
        })
    }
}

export async function getTasks(req, res){
    try {
        const task = await Task.findAll();
        res.json({
            data: task
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Bad Request',
            data: {}
        })
    }
}

export async function getOneTask(req, res){
    try {
        const { id } = req.params;
        const task = await Task.findOne({
            where: {
                id
            }
        });
        res.json({
            data: task
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            error: 'Bad Request',
            data: {}
        })
    }
}

export async function deleteTask(req, res){
    try {
        const { id } = req.params;
        const deleteRowCount = await Task.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Eliminado',
            count: deleteRowCount
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            error: 'Bad Request',
            data: {}
        })
    }
}

export async function getOneTaskByProject(req, res){
    const { project_id } = req.params;
    const tasks = await Task.findAll({
        attributes: ['id', 'project_id', 'done', 'name'],
        where:{
            project_id
        }
    });
    res.json({tasks});
}
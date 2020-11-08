import Project from '../models/Project'

export async function createProject(req, res) {
    const { name, description, priority, delivery_date } = req.body;

    try {
        let newProject = await Project.create({
            name,
            description,
            priority,
            delivery_date
        }, {
            fields: [
                'name',
                'description',
                'priority',
                'delivery_date'
            ]
        });
        if (newProject) {
            res.json({
                message: 'Project created successfully',
                data: newProject
            })
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            error: 'Something goes wrong',
            data: {}
        })
    }
}

export async function getProjects(req, res) {
    try {
        const projects = await Project.findAll();
        res.json({
            data: projects
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            error: 'Bad Request',
            data: {}
        })
    }
}

export async function getOneProject(req, res) {
    try {
        const { id } = req.params;
        const project = await Project.findOne({
            where: {
                id
            }
        });
        res.json({
            data: project
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            error: 'Bad Request',
            data: {}
        })
    }
}

export async function deleteProject(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Project.destroy({
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

export async function updateProject(req, res) {
    try {
        const { id } = req.params;
        const { name, priority, description, delivery_date } = req.body;

        const projects = await Project.findAll({
            attributes: ['id', 'name', 'priority', 'description', 'delivery_date'],
            where: {
                id
            }
        });
        
        if (projects.length > 0) {
            projects.forEach(async project => {
                await project.update({
                    name,
                    priority,
                    description,
                    delivery_date
                });
            });
        }

        res.json({
            message: 'Project update successfully',
            data: projects
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            error: 'Bad Request',
            data: {}
        })
    }
}
import Users from '../models/Users';

export async function createUsers(req, res){
    const { name, status, position, password} = req.body;
    //res.json('Hola createUsers');    
    try {
        let newUsers = await Users.create({
            name,
            status,
            position,
            password
        }, {
            fields:[
                'name',
                'status',
                'position',
                'password'
            ]
        });
        //newUsers.password = await newUsers.encryptPassword(password);
        console.log("Log bruno "+newUsers);
        if(newUsers){
            res.json({
                message: 'Users was created',
                data: newUsers
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: req.body
        })
        console.log(error);
    }
}
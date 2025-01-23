import moongoose from 'mongoose';


const projectSchema = new moongoose.Schema({
    name: {
        type: 'String',
        required: true,
        lowercase: true,
        trim: true,
        unique: [true, 'Project name must be unique'],
    },
    users : [
        {
            type: moongoose.Schema.Types.ObjectId,
            ref: 'user',
        },
    ],
} );

const Project = moongoose.model('project', projectSchema);

export default Project;
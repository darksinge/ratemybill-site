/**
* BillInfo.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
*/

module.exports = {
    schema: true,
    
    attributes: {
        
        id: {
			type: 'integer',
			unique: true,
			primaryKey: true,
			autoIncrement: true
		},
        
        name: {
            type: 'string',
            required: true
        },
        
        year: {
            type: 'string',
            required: true
        },
        
        comment: {
            collection: 'comment',
            via: 'bill'
        },

        happyVotes: 'integer',

        mehVotes: 'integer',

        angryVotes: 'integer',

        toJSON: function(){
            var obj = this.toObject();
            delete obj.createdAt;
            delete obj.updatedAt;
            return obj;
        }
        
    }
};

'use strict';


class Model{
    constructor(schema){
        this.schema = schema;
    }

    async create(record){
        try{
            let newRecord = new this.schema(record);
            return await newRecord.save();
        }catch(error){
            console.log('error while creating record', error)
        }
    }

    

    async readByQuery(query){
        try{
            let results = await this.schema.find(query);
            return results;
        }catch(error){
            console.log('error while reading by query', error);
    }

}
}
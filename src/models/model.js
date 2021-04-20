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

    async read(_id){
        try{
            let readRecord = await this.schema.findById({_id});
            return readRecord;
        }catch(error){
            console.log('error while reading record', error)
        }
    }


}
const models = require("../database/models");


class publication_typesServices{

static async getPublicationTypes(page,size,prop){
    try {
    let options = {
    limit: Number(size),
    offset: Number(page) * Number(size),
    };
    const whereSet = {};
    if(prop.name){
    whereSet.name=prop.name
    }
    if(prop.description){
    whereSet.description=prop.description
    }
    if(prop.publication_id){
    whereSet.publication_id=prop.publication_id
    }
    if(prop.tag_id){
    whereSet.tag_id=prop.tag_id
    }
    const result=await models.PublicationTypes.findAndCountAll({
        limit: options.limit,
        offset: options.offset,
        where: whereSet,
      });
      return { Page: Number(page), totalPublicationTypes: result.count, PublicationTypes: users.rows };
    } catch (error) {
        throw error
    }
}

static async getOnepubType(id){
    try {
     const result=await models.PublicationTypes.findByPk(id)
     return result
    } catch (error) {
    throw error
    }
}


}

module.exports=publication_typesServices
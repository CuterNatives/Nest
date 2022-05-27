import Localbase from 'localbase'
let db = new Localbase('db')
class nest {
    async addItem(item) {
        await db.collection('items').add(item)
        return item.id
    }
    async updateItem(item){
        await db.collection('items').doc({ id: item.id }).update({...item})
        return item.id
    }
    async getItem(id){
       let document = await  db.collection('items').doc({ id: id }).get()
       return document
    }
    async getAllItems(){
       let items = await db.collection('items').get()
       return items
    }
    async deleteItem(id){
        await db.collection('items').doc({ id: id }).delete()
        return id
    }
    async deleteMultiple(ids){
        for await(const id of ids){
            await db.collection('items').doc({ id: id }).delete()
        }
        return ids
    }
}

export default nest
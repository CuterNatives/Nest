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
    async getItemWithQr(qr){
        let document = await  db.collection('items').doc({ qr: qr }).get()
       return document
    }
    async getStats(){
        let stats = {}
        let outofstock = 0
        let items = await this.getAllItems()
        for await (const item of items){
            if(item.stock === 0){
                outofstock += 1
            }
        }
        stats.newitems = items.length
        stats.outofstock = outofstock
        return stats
    }
}

export default nest
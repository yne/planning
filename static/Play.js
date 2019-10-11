const PlayForm = {
    template:`<form action=/play>
        <input name=piece_id>
        <input name=date>
        <textarea name=actors> role=>actor_id </textarea>
        <input type=submit>
    </form>`
}

const PlayList = {
    props: {range:{default:'none'}, id:{type:Number, default:0}},
    template:`<div class=row>range={{range}} id={{id}}
        <a class="card col-4" is=router-link :to="{name:'PieceNew'}">Create</a>
        <div class="card col-4" v-for="p in plays">
            <a is=router-link :to="{name:'PieceForm', params:{id:p.piece_id}}">{{p.piece_id}}</a>
            {{p.date}} {{p.time}}
            <span v-for="a in p.actors">@{{a}} </span>
        </div>
        </div>`,
    data(){return {plays:[]}},
    async mounted(){
        this.plays = await this.rest('/play')
    }
}

export {PlayForm, PlayList}

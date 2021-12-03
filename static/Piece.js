const PieceForm = {
    template:`<p class="card col-4">TODO</p>`,
}

const PieceList = {
    template:`
    <p class="card col-4" v-for="piece in pieces">
        <a is=router-link :to="{name:'PieceForm', params:{id:piece.id}}">{{piece.id}}</a>
        <ul>
            <li v-for="(users,role) in piece.roles">{{role}}:
                <a v-for="(user,pos) in users" is=router-link :to="{name:'UserForm', params:{id:user}}">{{user}} </a>
            </li>
        </ul>
    </p>`,
    data(){return {pieces:[]}},
    async mounted() {
        this.pieces = await this.rest('/piece');
    }
}

export {PieceForm, PieceList}

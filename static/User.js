const UserForm = {
    template:`<form action=/user>
        <input name=user placeholder=username>
        <input name=pass placeholder=password type=password>
        <input type=submit>
    </form>`,
    data(){return {pieces:[]}},
    async mounted() {
        this.pieces = await this.rest('/piece');
    }
}

const UserList = {
    template:`<div class=row>
        <p class="card col-3" v-for="user in users">
            <a is=router-link :to="{name:'UserForm', params:{id:user.id}}">{{user.id}}</a>
        </p>
    </div>`,
    data(){return {users:[]}},
    async mounted(){
        this.users = await this.rest('/actor')
    }
}

export {UserForm, UserList}



const menu = ["Profile", "Logout"];


<div className="">
    <ul>
        {
            Menus.map(
                (menu) => <li>{menu}</li>
                )  
        }
    </ul>
</div>


css {
    menu {

        background : white;
        padding:4px;
        shadow: lightGreen;
        position: absolute;
    }
    inside {
        padding: 2px;
        cursor: pointer;
    }
}
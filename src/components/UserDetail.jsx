import { useContext } from "react";

import { GlobalContext } from "../reducers/globalReducer";

export default function UserDetail() {
    const { store } = useContext(GlobalContext);
    return (
        <div style={{ textAlign: "center", marginTop: 100 }}>
            <h1>UserDetail</h1>
            <div>
                {store.user?.username} : {store.user?.password}
                {store.token}
            </div>
        </div>
    );
}
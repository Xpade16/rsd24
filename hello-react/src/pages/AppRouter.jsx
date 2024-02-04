import App from '../App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Edit from './Edit.jsx';
import AppRoot from "../AppRoot.jsx";
import { useEffect, useState } from "react";

const api = "http://localhost:6969/tasks";


export default function AppRouter() {
    const [list, setList] = useState([
        // { _id: 1, subject: 'Apple', done: false },
        // { _id: 2, subject: 'Avocado', done: true },
        // { _id: 3, subject: 'Mango', done: false },
    ]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // fetch(api)
        //     .then(res => res.json())
        //     .then(json => setList(json))
        (async () => {
            const res = await fetch(api);
            const data = await res.json();
            setList(data);
            setIsLoading(false);
        })();
    }, [])
    const add = async (subject) => {
        if (!subject) return false;
        const res = await fetch(api, {
            method: 'post',
            body: JSON.stringify({ subject }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await res.json();
        setList([...list, data]);
        // setList([...list, { _id, subject: subject, done: false }]);
    }

    const update = async (_id, subject) => {
        if (!subject) return false;
        const res = await fetch(`${api}/${_id}`,{
            method: 'put',
            body: JSON.stringify({ subject }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await res.json();
        setList(list.map(item => {
            if(item._id === _id) item.subject = subject;
            return item;
        }));
        // setList(list.map(item => {
        //     if (item._id === _id) item.subject = subject;
        //     return item;
        // }
        // ));
    }

    const remove =  (id) => {
        fetch(`${api}/${id}`,{
            method: 'delete'
        })
        setList(list.filter(n => n._id !== id));
    }

    const toggle = async(_id) => {
        const res = await fetch(`${api}/toggle/${_id}`,{
            method: 'put',
        })
        const data = await res.json();
        setList(list.map(item => {
            if (item._id == _id) item.done = !item.done;
            return item;
        }))
    }

    const clear = () => {
        fetch(api,{
            method: 'delete'
        })
        setList(list.filter(item => !item.done));
    }

    const routes = createBrowserRouter([
        {
            path: "/",
            element: <AppRoot isLoading={isLoading} list={list} clear={clear} />,
            children: [
                {
                    path: "/",
                    element: <App list={list} add={add} remove={remove} toggle={toggle} />
                },
                {
                    path: "/edit",
                    element: <Edit list={list} update={update} />
                }
            ]
        }
    ])

    return (<RouterProvider router={routes}></RouterProvider>);
}
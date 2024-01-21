import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import axios from '../axios';
export default function Dashboard() {
    const { user } = useAuth();
    const [users, setUsers] = useState([]);
    const getData = async () => {
        if (user.isAdmin == 0) {
            window.location.href = '/';
        } else {
            const { data } = await axios.get(`/users`);
            setUsers(data.users);
        }
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="font-bold text-slate-600">Registrations List</div>
            <hr className="bg-slate-400 h-1 w-full my-4" />
            <div className="block p-10 bg-white border border-gray-200 shadow-xl rounded-lg shadowdark:border-gray-700">
                <table className='border-collapse table-auto w-full text-sm'>

                    <thead>
                        <tr>
                            <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Name</th>
                            <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((e) => (
                            <tr key={e.id}>
                                <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{e.name}</td>
                                <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{e.email}</td>
                            </tr>
                        ))
                        }
                    </tbody>

                </table>
            </div >
        </>
    );
}

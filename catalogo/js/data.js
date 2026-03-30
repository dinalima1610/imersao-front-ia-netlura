// Dados das categorias que aparecem no catálogo.
// Cada categoria tem um título e uma lista de itens.
let items_epicos = "";
let items_series = "";

if (localStorage.perfilAtivoNome === "Fernanda") {
    items_epicos = [
        {
            img: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg", top10: true, badge: "Clássico", badgeColor: "red", progress: 0,
            youtube: "https://www.youtube.com/watch?v=bLvqoHBptjg"
        },
        {
            img: "https://ingresso-a.akamaihd.net/img/cinema/cartaz/14413-destaque.jpg", progress: 0,
            youtube: "https://www.youtube.com/watch?v=a06zxOyQrAs"
        },
        {
            img: "https://aventurasnahistoria.com.br/wp-content/uploads/entretenimento/gladiador_2_VvnGVes.jpg", progress: 0,
            youtube: "https://www.youtube.com/watch?v=cXg62-t8BWs"
        },
        {
            img: "https://i.ytimg.com/vi/OQgySPQ5M3Y/maxresdefault.jpg", progress: 0,
            youtube: "https://www.youtube.com/watch?v=zckJCxYxn1g"
        }
    ];

    items_series = [
        { 
            img: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2024/10/10-biggest-twists-in-house-md.jpg?w=1600&h=900&fit=crop", badge: "Novo episódio", badgeColor: "red", 
            youtube: "https://www.youtube.com/watch?v=izE5Dwy5b70" 
        },
        { 
            img: "https://http2.mlstatic.com/D_NQ_NP_799383-MLA87887599841_072025-B.webp", badge: "Novidade", badgeColor: "red", 
            youtube: "https://www.youtube.com/watch?v=opYyuupyWmA" 
        },
        { 
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG2dXlEZjufEYn_Cp4-KPvOxFYHSc0W4ZFAN-tyCo7uYrNuc9fWuxDwuU1-b_m8i9pkQVND4zcoQ2zLVyNhXVNDbl8dGussbNvuohM6aC7&s=10", top10: true, badge: "10 temporadas", badgeColor: "red", 
            youtube: "https://www.youtube.com/watch?v=IKtL4IW6G0I" 
        },
        { 
            img: "https://i.redd.it/i-never-realized-how-great-the-breaking-bad-official-v0-7836elhcytf61.jpg?width=894&format=pjpg&auto=webp&s=32166acf1a26d8b784b55028fb3f6aef6fafbf52", top10: true, 
            youtube: "https://www.youtube.com/watch?v=VFLkMDEO-Xc" 
        }
    ];
}
else 
    if (localStorage.perfilAtivoNome === "Thiago") {
        items_epicos = [
            {
                img: "https://aventurasnahistoria.com.br/wp-content/uploads/entretenimento/gladiador_2_VvnGVes.jpg", top10: true, badge: "Clássico", badgeColor: "red", progress: 0,
                youtube: "https://www.youtube.com/watch?v=cXg62-t8BWs"
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg", top10: true, badge: "Clássico", badgeColor: "red", progress: 0,
                youtube: "https://www.youtube.com/watch?v=bLvqoHBptjg"
            },
            {
                img: "https://i.ytimg.com/vi/OQgySPQ5M3Y/maxresdefault.jpg", top10: true, badge: "Clássico", badgeColor: "red", progress: 0,
                youtube: "https://www.youtube.com/watch?v=zckJCxYxn1g"
            },
            {
                img: "https://ingresso-a.akamaihd.net/img/cinema/cartaz/14413-destaque.jpg", top10: true, badge: "Clássico", badgeColor: "red", progress: 0,
                youtube: "https://www.youtube.com/watch?v=a06zxOyQrAs"
            }
        ];

        items_series = [
            { 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG2dXlEZjufEYn_Cp4-KPvOxFYHSc0W4ZFAN-tyCo7uYrNuc9fWuxDwuU1-b_m8i9pkQVND4zcoQ2zLVyNhXVNDbl8dGussbNvuohM6aC7&s=10", top10: true, badge: "10 temporadas", badgeColor: "red", 
                youtube: "https://www.youtube.com/watch?v=IKtL4IW6G0I" 
            },
            { 
                img: "https://i.redd.it/i-never-realized-how-great-the-breaking-bad-official-v0-7836elhcytf61.jpg?width=894&format=pjpg&auto=webp&s=32166acf1a26d8b784b55028fb3f6aef6fafbf52", top10: true, 
                youtube: "https://www.youtube.com/watch?v=VFLkMDEO-Xc" 
            },
            { 
                img: "https://http2.mlstatic.com/D_NQ_NP_799383-MLA87887599841_072025-B.webp", badge: "Novidade", badgeColor: "red", 
                youtube: "https://www.youtube.com/watch?v=opYyuupyWmA" 
            },
            { 
                img: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2024/10/10-biggest-twists-in-house-md.jpg?w=1600&h=900&fit=crop", badge: "Novo episódio", badgeColor: "red", 
                youtube: "https://www.youtube.com/watch?v=izE5Dwy5b70" 
            }
        ];
    }
else 
    if (localStorage.perfilAtivoNome === "Thamiris") {
        items_epicos = [
            {
                img: "https://i.ytimg.com/vi/OQgySPQ5M3Y/maxresdefault.jpg", top10: true, badge: "Clássico", badgeColor: "red", progress: 0,
                youtube: "https://www.youtube.com/watch?v=zckJCxYxn1g"
            },
            {
                img: "https://aventurasnahistoria.com.br/wp-content/uploads/entretenimento/gladiador_2_VvnGVes.jpg", progress: 0,
                youtube: "https://www.youtube.com/watch?v=cXg62-t8BWs"
            },
            {
                img: "https://ingresso-a.akamaihd.net/img/cinema/cartaz/14413-destaque.jpg", progress: 0,
                youtube: "https://www.youtube.com/watch?v=a06zxOyQrAs"
            },
            {
                img: "https://i.ytimg.com/vi/OQgySPQ5M3Y/maxresdefault.jpg", progress: 0,
                youtube: "https://www.youtube.com/watch?v=bLvqoHBptjg"
            }
        ];

        items_series = [
            { 
                img: "https://http2.mlstatic.com/D_NQ_NP_799383-MLA87887599841_072025-B.webp", badge: "Novidade", badgeColor: "red", 
                youtube: "https://www.youtube.com/watch?v=opYyuupyWmA" 
            },
            { 
                img: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2024/10/10-biggest-twists-in-house-md.jpg?w=1600&h=900&fit=crop", badge: "Novo episódio", badgeColor: "red", 
                youtube: "https://www.youtube.com/watch?v=izE5Dwy5b70" 
            },
            { 
                img: "https://i.redd.it/i-never-realized-how-great-the-breaking-bad-official-v0-7836elhcytf61.jpg?width=894&format=pjpg&auto=webp&s=32166acf1a26d8b784b55028fb3f6aef6fafbf52", top10: true, 
                youtube: "https://www.youtube.com/watch?v=VFLkMDEO-Xc" 
            },
            { 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG2dXlEZjufEYn_Cp4-KPvOxFYHSc0W4ZFAN-tyCo7uYrNuc9fWuxDwuU1-b_m8i9pkQVND4zcoQ2zLVyNhXVNDbl8dGussbNvuohM6aC7&s=10", top10: true, badge: "10 temporadas", badgeColor: "red", 
                youtube: "https://www.youtube.com/watch?v=IKtL4IW6G0I" 
            }
        ];
    }
else 
    if (localStorage.perfilAtivoNome === "Guilherme") {
        items_epicos = [
            {
                img: "https://ingresso-a.akamaihd.net/img/cinema/cartaz/14413-destaque.jpg", top10: true, badge: "Clássico", badgeColor: "red", progress: 0,
                youtube: "https://www.youtube.com/watch?v=a06zxOyQrAs"
            },
            {
                img: "https://i.ytimg.com/vi/OQgySPQ5M3Y/maxresdefault.jpg", top10: true, badge: "Clássico", badgeColor: "red", progress: 0,
                youtube: "https://www.youtube.com/watch?v=zckJCxYxn1g"
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg", top10: true, badge: "Clássico", badgeColor: "red", progress: 0,
                youtube: "https://www.youtube.com/watch?v=bLvqoHBptjg"
            },
            {
                img: "https://aventurasnahistoria.com.br/wp-content/uploads/entretenimento/gladiador_2_VvnGVes.jpg", top10: true, badge: "Clássico", badgeColor: "red", progress: 0,
                youtube: "https://www.youtube.com/watch?v=cXg62-t8BWs"
            }
        ];

        items_series = [
            { 
                img: "https://i.redd.it/i-never-realized-how-great-the-breaking-bad-official-v0-7836elhcytf61.jpg?width=894&format=pjpg&auto=webp&s=32166acf1a26d8b784b55028fb3f6aef6fafbf52", top10: true, 
                youtube: "https://www.youtube.com/watch?v=VFLkMDEO-Xc" 
            },
            { 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG2dXlEZjufEYn_Cp4-KPvOxFYHSc0W4ZFAN-tyCo7uYrNuc9fWuxDwuU1-b_m8i9pkQVND4zcoQ2zLVyNhXVNDbl8dGussbNvuohM6aC7&s=10", top10: true, badge: "10 temporadas", badgeColor: "red", 
                youtube: "https://www.youtube.com/watch?v=IKtL4IW6G0I" 
            },
            { 
                img: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2024/10/10-biggest-twists-in-house-md.jpg?w=1600&h=900&fit=crop", badge: "Novo episódio", badgeColor: "red", 
                youtube: "https://www.youtube.com/watch?v=izE5Dwy5b70" 
            },
            { 
                img: "https://http2.mlstatic.com/D_NQ_NP_799383-MLA87887599841_072025-B.webp", badge: "Novidade", badgeColor: "red", 
                youtube: "https://www.youtube.com/watch?v=opYyuupyWmA" 
            }
        ];
    }

export const categories = [
    {
        title: "Épicos",
        items: items_epicos
    },
    {
        title: "Séries",
        items: items_series

    },
    {
        title: "Para maratonar",
        items: [
            { img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop", top10: true, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop", top10: true, badge: "Novidade", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop", top10: true, badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop", top10: true, badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
        ]
    }
];

interface MetaItem {
    icon: string;
    label?: string;
}

export interface ArticleHeader {
    heading: string;
    href:string;
    meta: MetaItem[];
    image?: string;
    description?: string;
}

export const businessNews: ArticleHeader[] = [
    {
        heading:"प्याजको भाउ किलोकै सय पार, किन बढिरहेछ बारम्बार ?",
        href:"",
        meta:[{icon:"https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/ok-icon.png"},
            {icon:"https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/clock-icon.png" ,label:" १४ घण्टा अगाडि"}
        ]

    },
        {
        heading:"पर्यटन बोर्ड, प्राधिकरण र नेवानि : आर्थिक वर्षको पहिलो महिना कट्यो, आएन बजेट",
          href:"",
        meta:[{icon:"https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/ok-icon.png"},
            {icon:"https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/clock-icon.png" ,label:" १४ घण्टा अगाडि"}
        ]

    },
        {
        heading:"मलेसियाको रोजगारीमा सिन्डिकेट : विरोधमा सरकार र म्यानपावर व्यवसायी एकै ठाउँ",
          href:"",
        meta:[{icon:"https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/ok-icon.png"},
            {icon:"https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/clock-icon.png" ,label:" १४ घण्टा अगाडि"}
        ]

    },
        {
        heading:"काठमाडौंको उत्तरी भेगमा ग्राहक आकर्षण केन्द्र बनिरहेको ‘टाटा सर्भिस सेन्टर कपन’",
          href:"",
        meta:[{icon:"https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/ok-icon.png"},
            {icon:"https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/clock-icon.png" ,label:" १४ घण्टा अगाडि"}
        ]

    },
        {
        heading:"एक महिनामै पौने २ अर्बको धानचामल आयात",
          href:"",
        meta:[{icon:"https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/ok-icon.png"},
            {icon:"https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/clock-icon.png" ,label:" १४ घण्टा अगाडि"}
        ]

    },
]
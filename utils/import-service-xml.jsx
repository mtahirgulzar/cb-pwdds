import React, { useEffect, useState } from 'react';
import TurndownService from 'turndown';
import XMLData from '../utils/wp-export-blog';
import xml2js from 'xml2js';
// import getUrls from 'get-urls';
import axios from 'axios';

const Convert = () => {
    const [dataXml, setDataXml] = useState(null);
    const [dataMark, setDataMark] = useState(null);

    // converting data from xml to json
    useEffect(() => {
        const parser = new xml2js.Parser();
        parser.parseString(XMLData, function (err, result) {
            setDataXml(result.rss.channel[0].item);
        });
    }, [XMLData]);

    // converting the content to markdown
    let required = {
        id: '',
        title: '',
        description: '',
        slug: '',
        body: '',
        createdAt: '',
        updatedAt: '',
        publishedAt: '',
        image: '',
        SEO: null,
        // category: {
        //   id: "",
        //   name: "",
        //   createdAt: "",
        //   updatedAt: "",
        //   publishedAt: "",
        // },
        // author: {
        //   id: null,
        //   name: "",
        //   title: "",
        //   createdAt: "",
        //   updatedAt: "",
        //   publishedAt: "",
        //   image: null,
        // },
    };

    useEffect(() => {
        const turndownService = new TurndownService();

        const mapData = dataXml?.map((wpPost) => {
        

            for (const [key, value] of Object.entries(wpPost)) {
                let modded = key.replace('wp:', '');
                modded = modded.replace(':encoded', '');
                wpPost[modded] = value;
                key.includes('wp:') || (key.includes(':encoded') && delete wpPost[key]);
            }

            return {
                ...required,
                status: wpPost.status[0],
                id: wpPost.post_id[0],
                title: wpPost.title[0],
                description: turndownService
                    .turndown(wpPost.content[0])
                    .split(' ')
                    .slice(0, 10)
                    .join(' '),
                slug: wpPost.post_name[0],
                image: wpPost.post_image,
                body: wpPost.content[0],
                createdAt: new Date(wpPost.post_date[0]),
                updatedAt: new Date(wpPost.post_modified[0]),
                publishedAt: new Date(wpPost.pubDate[0]),
              
            };
        });

        const finalData = mapData?.map((wpPost, index) => {

            var el = document.createElement('html');
            el.innerHTML = wpPost.body;

            let imgs = el.getElementsByTagName('img');
            for (let img of imgs) {
                img.src = `https://adminpwdds.vigorant.xyz/uploads/${img?.src.split('/')[img?.src.split('/').length - 1]
                    }`,
                    img.className = "converted-images"
            }

            wpPost.body = el.innerHTML;


            return {
                ...required,
                status: wpPost.status,
                id: wpPost.id,
                title: wpPost.title,
                description: turndownService.turndown(wpPost.description),
                slug: wpPost.slug,
                image: wpPost.image,
                body: wpPost.body,
                createdAt: wpPost.createdAt,
                updatedAt: wpPost.updatedAt,
                publishedAt: wpPost.publishedAt,
            };
        });
        finalData
            ?.filter((item) => item.status === 'publish')
            .map((sin, index) => {
                // axios.post('https://adminpwdds.vigorant.xyz/api/services', {
                //     data: {
                //         title: sin.title,
                //         description: sin.description.slice(0, 150).concat("..."),
                //         slug: sin.slug,
                //         body: sin.body,
                //         createdAt: sin.createdAt,
                //         updatedAt: sin.updatedAt,
                //         publishedAt: sin.publishedAt,
                //     }
                // });
                console.log(`data here of service${index}`, {
                    data: {
                        title: sin.title,
                        description: sin.description.slice(0, 150).concat("..."),
                        slug: sin.slug,
                        body: sin.body,
                        createdAt: sin.createdAt,
                        updatedAt: sin.updatedAt,
                        publishedAt: sin.publishedAt,
                    }
                })
            });

        // setDataMark(mapData);
    }, [dataXml]);

    return null;
};

export default Convert;

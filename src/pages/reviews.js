import React from "react";
import Layout from "../components/layout";
import {graphql, useStaticQuery} from "gatsby";

export default function Reviews() {
    const data = useStaticQuery(graphql`
        query {  
            allComment {
                nodes {
                    email
                    body
                }
            }
        }
    `);

    const comments = data.allComment.nodes;

    return (
        <Layout>
            <h3>Reviews</h3>
            <h4>Últimas avaliações de clientes</h4>
            <table width="900px" border={1} cellPadding={10} cellSpacing={0}>
                <tr>
                <th>Usuário</th>
                <th>Comentário</th>
                </tr>

                {comments.slice(0,9).map(item => {
                return (
                    <tr>
                    <td>{item.email}</td>
                    <td>{item.body}</td>
                    </tr>
                );
                })}
            </table>
        </Layout>
    );
}
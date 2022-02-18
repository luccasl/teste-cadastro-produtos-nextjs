import { GetServerSideProps } from "next"
import { AddProduct } from "./AddProduct"

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch('http://localhost/api/tags')
    const data = await res.json()

    return {
        props: {
            data,
        }
    }
}

export default AddProduct
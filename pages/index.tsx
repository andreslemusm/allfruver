import { Category } from "@chec/commerce.js/types/category";
import { CategoryCheckbox } from "@components/category-checkbox";
import { Fragment } from "react";
import type { GetStaticProps } from "next";
import Head from "next/head";
import { HiSearch } from "react-icons/hi";
import { commerceClient } from "@lib/commerce";
import { Form, Input } from "@components/lib";

type HomeProps = {
  categories: Array<Category>;
};

const Home = ({ categories }: HomeProps): React.ReactElement => (
  <Fragment>
    <Head>
      <title>All Fruver</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Form
      className="shadow-md py-2.5 lg:py-4"
      // eslint-disable-next-line no-console
      onSubmit={(data) => console.log(data)}
    >
      <div className="max-w-2xl px-8 mx-auto">
        <Input
          name="search"
          label="Buscar"
          srLabel
          leadingIcon={HiSearch}
          placeholder="Buscar"
        />
      </div>
      <div className="px-8 pt-4 overflow-x-auto lg:px-0">
        <fieldset className="flex gap-x-2 last:pr-8 sm:last:pr-0 sm:justify-center">
          <legend className="sr-only">Categorias</legend>
          {categories.map((category) => (
            <CategoryCheckbox
              key={category.id}
              name={category.name}
              value={category.slug}
              imageURL={
                (category as unknown as { assets: Array<{ url: string }> })
                  .assets[0].url
              }
            />
          ))}
        </fieldset>
      </div>
    </Form>
  </Fragment>
);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const { data: categories } = await commerceClient.categories.list();

  return {
    props: {
      categories,
    },
  };
};

export default Home;

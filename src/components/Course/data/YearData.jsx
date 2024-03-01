/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./year.css";
import { P } from "react-html5video";
const YearData = ({ yearNo }) => {
  const render = () => {
    if (yearNo === "1") {
      return (
        <p>
          luptas doloremque ea, laboriosam, beatae nostrum hic iusto! Incidunt
          in cupiditate saepe harum iure repellendus beatae! Ad. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Dignissimos ducimus ipsam
          error debitis. Deleniti, porro illo deserunt mollitia dicta voluptatum
          quaerat impedit! Accusantium rerum ipsum aperiam laboriosam eaque
          sequi? Nihil odit corrupti suscipit delectus inventore. Quo id
          inventore rerum maiores quaerat, laborum quam corporis eius maxime eos
          earum culpa voluptates ut ipsam cum quasi officiis ducimus,
          consequatur facere aut! Veniam sint ducimus amet, explicabo tempore
          laudantium sapiente architecto quasi totam accusantium, neque iste
          ratione aperiam quas quibusdam cum aliquid quod reprehenderit? Itaque
          cumque, saepe ipsam voluptatibus quos cum minima, consectetur in ipsa
          natus porro commodi accusamus qui sapiente temporibus ea aspernatur!
          Autem incidunt cupiditate non blanditiis rem fugiat, quia illum
          maiores necessitatibus debitis, error rerum? Laborum eius magnam
          excepturi repudiandae sequi saepe necessitatibus laboriosam possimus
          nam inventore distinctio, cumque voluptatibus magni consequuntur minus
          odio nobis fugiat voluptatum libero, ducimus eveniet. Laborum commodi
          fugit omnis, sequi necessitatibus veniam doloribus inventore eligendi
          beatae repellendus sint enim, quidem consequatur animi porro quae
          blanditiis deserunt, iste ab quasi ipsam molestias quos. Laborum
          quibusdam corporis id quae, delectus, repudiandae dolores aliquam
          veniam minus assumenda molestias, facilis a architecto quos. Quasi
          sequi consequuntur dignissimos culpa nemo minus possimus laudantium
          accusantium neque voluptas, tempora, doloremque excepturi nulla?
        </p>
      );
    } else if (yearNo === "2") {
      return (
        <p>
          consectetur a quibusdam, iure vel corporis distinctio praesentium,
          tempore obcaecati debitis dicta id labore corrupti! Nisi minus
          mollitia accusamus neque fugiat fugit distinctio praesentium
          voluptatem fuga laudantium, totam saepe libero quam nostrum doloremque
          dolores ex cumque! Similique culpa, cumque aliquid praesentium eum
          minus sed asperiores mollitia! Blanditiis, ipsa provident dicta iste
          ut animi voluptas impedit, quaerat qui porro earum accusamus ex
          exercitationem perspiciatis obcaecati distinctio quisquam quae,
          expedita dolor vitae omnis. Exercitationem sapiente, explicabo magnam,
          pariatur impedit asperiores ullam saepe totam iusto similique
          incidunt?
        </p>
      );
    } else if (yearNo === "3") {
      return (
        <p>
          rro? Quos fugit corporis perspiciatis perferendis est quas
          necessitatibus explicabo ea reiciendis tempora! Tempore quis adipisci
          aperiam labore sapiente. Dolor, laudantium. Cum animi harum
          voluptatibus, sit necessitatibus inventore provident nemo est suscipit
          laudantium omnis, ut eos nesciunt explicabo recusandae maiores
          doloremque quis accusamus eligendi vitae perspiciatis nam quasi.
          Blanditiis natus quae nihil dolor consectetur eum sequi maxime unde
          odit dolores fuga quis, tenetur explicabo quisquam dignissimos aliquid
          sunt eius, possimus itaque optio! Sit aliquid ullam et magni velit
          nesciunt numquam labore, hic enim minima deleniti sed doloremque
          nostrum optio sapiente veritatis corrupti minus illo dolor. Ea
          asperiores aspernatur necessitatibus nesciunt rem fugit nihil
          laudantium deleniti, tempora, veniam eligendi temporibus natus ducimus
          placeat consequatur eius blanditiis iusto cum harum numquam soluta
          cupiditate. Nulla a accusamus, hic illum autem, sunt architecto velit
          asperiores ut ea earum, sapiente perspiciatis dolores tempora
          laboriosam ipsum officiis beatae. Repellendus accusantium harum
          officia non recusandae nulla quod officiis exercitationem, in animi
          earum aliquam tempora fugiat illum odit unde minima eaque ab,
          aspernatur a soluta aperiam, ad omnis ullam? Voluptate, laborum! Qui,
          aliquid optio. Cumque fugit nostrum, dolorum soluta unde aliquid
          temporibus velit voluptas sed aut ipsam labore dolores repudiandae.
          Tempore vero recusandae esse consectetur corporis ad pariatur mollitia
          blanditiis corrupti quia natus aliquid sint ratione reiciendis
          repellendus totam, assumenda dolore magnam facere illum, deleniti,
          molestias nulla sapiente? Ea dolor aperiam fuga?
        </p>
      );
    } else if (yearNo === "4") {
      return (
        <p>
          dolor sit amet consectetur, adipisicing elit. Ducimus quos quaerat
          illum. Excepturi voluptatibus autem in dolor? Natus distinctio placeat
          eius repudiandae dicta, eaque incidunt, atque quo aspernatur expedita,
          sint et exercitationem architecto neque sit unde adipisci nostrum quis
          fuga praesentium corporis laboriosam cumque voluptatem facilis.
          Expedita eius dolores illo.
        </p>
      );
    }
  };
  return <div className="year-main">{render()}</div>;
};

export default YearData;

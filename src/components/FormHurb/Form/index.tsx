import Image from 'next/image';

import { FormContainer } from './styles';

export default function Form() {
  return (
    <FormContainer>
      <div className="imageForm">
        <Image
          src="/travelhurb.svg"
          alt="Picture of the author"
          width="300"
          height="300"
        />
      </div>
      <ins
        id="afiliateHu"
        data-ad-client="257659"
        data-ad-width="352"
        data-ad-height="352"
        data-ad-link="_blank"
        data-ad-cor="5"
      >
        {' '}
      </ins>
      <script src="https://www.clubehu.com.br/assets/cmp/js/bloco.js" />
    </FormContainer>
  );
}

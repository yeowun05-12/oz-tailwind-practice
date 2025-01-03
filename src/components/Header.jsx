export default function Header() {
  return (
    <header className='flex justify-between align-center  px-5 py-5 bg-black	 '>
      <h2 className='text-white	'>OZ코딩스쿨</h2>
      <ul className='flex justify-center align-center gap-5'>
        <li className='text-white	list-none font-normal text-[13px]	'>로그인</li>
        <li className='text-white	list-none font-normal	text-[13px]'>회원가입</li>
        <li className='text-white	list-none font-normal	text-[13px]'>내클래스</li>
      </ul>
    </header>
  );
}

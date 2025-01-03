export default function Content({ content }) {
  return (
    <div className=' flex flex-col	items-start	gap-5'>
      <img
        src={content.img}
        alt={content.title}
        className='w-300 rounded-[10px] mb-3'
      />
      <span
        className='
          text-[12px]
          text-[#d7fa00]
          border
          border-[#d7fa00]
          rounded-[3px]
          p-1 
        '
      >
        모집중
      </span>
      <div className='text-[18px] font-bold '>{content.title}</div>
      <p className='text-[12px] text-gray-400 '>{content.subtitle}</p>
    </div>
  );
}

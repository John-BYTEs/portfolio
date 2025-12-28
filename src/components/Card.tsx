// type CardProps = {
//   title?: string;
//   content?: string;
//   children?: React.ReactNode;
// };

// export default function Card({ title, content, children }: CardProps) {
//   return (
//     <>
//       {/* <section className="md:w-full rounded shadow-xl p-5 bg-gray-700 text-start">
//               <h1 className="text-white text-2xl  font-bold">{title}</h1>
//               <p className="text-gray-300 text-sm md:text-md lg:text-lg pt-3 font-sans">{content}</p>
//               {children && <div>{children}</div>}
//             </section> */}
//       <section
//         className="w-full h-full rounded-xl shadow-2xl
//                     p-3 xs:p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8
//                     bg-gray-700/95 backdrop-blur-sm
//                     text-start border border-gray-600"
//       >
//         <h1
//           className="text-white font-bold mb-2
//                  text-lg
//                  xs:text-xl
//                  sm:text-2xl
//                  md:text-3xl
//                  lg:text-4xl"
//         >
//           {title}
//         </h1>

//         {content && (
//           <p
//             className="text-gray-200 font-sans
//                   text-sm leading-relaxed
//                   xs:text-base xs:leading-relaxed
//                   sm:text-lg sm:leading-relaxed
//                   md:text-xl md:leading-relaxed
//                   lg:text-2xl lg:leading-relaxed"
//           >
//             {content}
//           </p>
//         )}

//         {children && (
//           <div className="mt-3 xs:mt-4 sm:mt-5 md:mt-6">{children}</div>
//         )}
//       </section>
//     </>
//   );
// }
type CardProps = {
  title?: string;
  titleClassName?: string;
  content?: React.ReactNode;
  children?: React.ReactNode;
  className?: string; // Added className prop for custom styling
};

export default function Card({ title, content, children, className = "" }: CardProps) {
  return (
    <section
      className={`
        w-full  shadow-lg
        p-4 sm:p-5 md:p-6 lg:p-7
        text- border border-gray-800 rounded
        transition-all duration-200 hover:shadow-xl hover:bg-gray-900/10
        ${className}
      `}
    >
      {title && (
        <h1
          className="text-white font-sans font-bold mb-3
            text-xl
            sm:text-2xl
            md:text-3xl
            lg:text-4xl"
        >
          {title}
        </h1>
      )}

      {content && (
        <p
          className="text-gray-300 mt-2 font-sans
            text-sm leading-relaxed
            sm:text-base sm:leading-relaxed
            md:text-lg md:leading-relaxed
            lg:text-xl lg:leading-relaxed
            mb-4 sm:mb-5"
        >
          {content}
        </p>
      )}

      {children && (
        <div className="mt-4 sm:mt-5 md:mt-6">
          {children}
        </div>
      )}
    </section>
  );
}
// // NewsTable.jsx
// import React from 'react';

// const NewsTable = ({ newsList, onDelete, onEdit }) => {
//   return (
//     <>
//     <div className="news-table">
//       <h2>News Table</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Published Date</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {newsList?.map((news) => (
//             <tr key={news.id}>
//               <td>{news.title}</td>
//               <td>{news.publishedDate}</td>
//               <td>
//                 <button onClick={() => onEdit(news.id)}>Edit</button>
//                 <button onClick={() => onDelete(news.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>


//     </>
//   );
// };

// export default NewsTable;

// components/NewsTable/NewsTable.jsx
import React, { useState } from 'react';
import moment from 'moment';

const NewsTable = ({ newsList, onDelete, onEdit }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedNewsId, setSelectedNewsId] = useState(null);

  const handleDelete = (uuid) => {
    setSelectedNewsId(uuid);
    setIsDeleteModalOpen(true);
  };

  const handleEdit = (uuid) => {
    onEdit(uuid);
  };

  const handleConfirmDelete = () => {
    onDelete(selectedNewsId);
    closeDeleteModal();
  };

  const closeDeleteModal = () => {
    setSelectedNewsId(null);
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Published Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
              <th scope="col" className="px-6 py-3">
                Update
              </th>
            </tr>
          </thead>
          <tbody>
            {newsList.map((news, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0
                    ? 'even:bg-gray-50 even:dark:bg-gray-800'
                    : 'odd:bg-white odd:dark:bg-gray-900'
                  } border-b dark:border-gray-700`}
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {news.title}
                </td>
                <td className="px-6 py-4">  {moment(news.publishedDate).format('YYYY-MM-DD HH:mm:ss')}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(news.uuid)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleEdit(news.uuid)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Delete Confirmation Modal */}
        {isDeleteModalOpen && (
          <div c
            lassName="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-50 bg-white p-6 rounded-md">
              <p className="text-lg font-semibold mb-4">Are you sure you want to delete this news?</p>
              <div className="flex justify-end">
                <button
                  onClick={closeDeleteModal}
                  className="mr-2 px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmDelete}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>


    </>
  );
};

export default NewsTable;

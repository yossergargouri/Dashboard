import { useState, ChangeEvent, useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import axios from 'axios';
import { accountService } from '../../services/account.service';

const FormElements = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [Name, setProjectName] = useState<string>('');
  const [Version, setProjectVersion] = useState<string>('');
  const [UserId, setUserId] = useState<string>('');

  useEffect(() => {
    const fetchUserId = async () => {
      const loggedInUserId = await accountService.getUserId();
      setUserId(loggedInUserId || ''); // Mettre à jour l'état UserId avec l'ID récupéré
    };

    fetchUserId();
  }, []);
  console.log(accountService.getUserId())

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  const handleUpload = async () => {
    if (!selectedFile || !Name || !Version || !UserId) {
      console.log('Veuillez remplir tous les champs.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('name', Name);
    formData.append('version', Version);
    formData.append('userId', UserId);

    try {
      const response = await axios.post('http://localhost:5245/api/SlnFile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Réponse du serveur :', response.data);
    } catch (error) {
      console.error('Erreur lors de l\'envoi du fichier :', error);
    }
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Upload your Project" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Input Fields --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Project information
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                 Project Name
                </label>
                <input
                  type="text"
                  placeholder="Project Name"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  value={Name}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Version
                </label>
                <input
                  type="text"
                  placeholder="Version"
                  className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                  value={Version}
                  onChange={(e) => setProjectVersion(e.target.value)}
                />
              </div>

              {/* <!-- File upload --> */}
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    File upload
                  </h3>
                </div>
                <div className="flex flex-col gap-5.5 p-6.5">
                  <div>
                    <label className="mb-3 block text-black dark:text-white">
                      Attach sln file
                    </label>
                    <input
                      type="file"
                      className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                      type="button"
                    >
                      Cancel
                    </button>
                    <button
                      className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                      type="button"
                      onClick={handleUpload}
                    >
                     Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default FormElements;

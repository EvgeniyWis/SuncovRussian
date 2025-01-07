import { memo, useEffect, useMemo, useState } from 'react';
import {
  theoriesFolderName,
  useGetTheoriesQuery,
} from '../model/api/theoryApi';
import { YandexCloudAPIItem } from '@/shared/api/yandexCloudApi/types';
import { PageLoading } from '@/shared/ui-kit/PageLoading/PageLoading';
import { ErrorComponent } from '@/shared/ui-kit/ErrorComponent';
import { TheorySidebar } from './TheorySidebar';
import { Flex } from '@/shared/lib/Stack';
import * as styles from './Theory.module.scss';
import { TheoryContext } from '../model/context/TheoryContext';
import { PDFViewer } from '@/shared/lib/PDFViewer';

export const Theory: React.FC = memo((): React.JSX.Element => {
  // Получение всех pdf файлов с теорией с Яндекс Диска
  const { data, isLoading, isError } = useGetTheoriesQuery();

  const [pdfFiles, setPdfFiles] = useState<YandexCloudAPIItem[]>([]);

  // Фильтрация полученных файлов
  useEffect(() => {
    if (data) {
      const regex = new RegExp(`^disk:\\/${theoriesFolderName}\\/.*$`);

      const dataPfdFiles = data.items.filter(
        (item) => item.name.endsWith('.pdf') && regex.test(item.path),
      );
      setPdfFiles(dataPfdFiles);
    }
  }, [data]);

  // Обработка выбора раздела пользователем
  const [selectedSection, setSelectedSection] = useState<string>('');

  const selectedPdfFile = useMemo(
    () => pdfFiles.find((file) => file.name.slice(0, -4) === selectedSection),
    [pdfFiles, selectedSection],
  );

  // Обработка события загрузки файлов
  if (isLoading) {
    return <PageLoading />;
  }

  // Обработка ошибки загрузки файлов
  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <TheoryContext.Provider value={{ selectedSection, setSelectedSection }}>
      <Flex gap="50" maxHeight width="100">
        <TheorySidebar
          pdfFilesTitles={pdfFiles.map((item) => item.name.slice(0, -4))}
        />

        {selectedPdfFile && (
          <Flex
            className={styles.Theory__content}
            relative
            maxHeight
            width="80"
          >
            <PDFViewer url={selectedPdfFile.file} />
          </Flex>
        )}
      </Flex>
    </TheoryContext.Provider>
  );
});

Theory.displayName = 'Theory';

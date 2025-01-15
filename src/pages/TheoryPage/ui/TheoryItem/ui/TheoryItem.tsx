import { useGetTheoryQuery } from '../../../model/api/theoryApi';
import { TheoryItemProps } from '../model/types';
import { memo } from 'react';
import { PageLoading } from '@/shared/ui/PageLoading/PageLoading';
import { ErrorComponent } from '@/shared/ui/ErrorComponent';
import { PDFViewer } from '@/shared/lib/PDFViewer';

export const TheoryItem: React.FC<TheoryItemProps> = memo(
  ({ fileKey }): React.JSX.Element => {
    // Получение ссылки на файл по ключу
    const { data, isLoading, isError, isFetching } = useGetTheoryQuery(fileKey);

    // Обработка события загрузки файлов
    if (isLoading || isFetching) {
      return <PageLoading />;
    }

    // Обработка ошибки загрузки файлов
    if (isError) {
      return <ErrorComponent withHeader={false} />;
    }

    return (
      <div data-testid="TheoryItem">
        {data?.fileData && <PDFViewer url={data?.fileData.fileUrl} />}
      </div>
    );
  },
);

TheoryItem.displayName = 'TheoryItem';

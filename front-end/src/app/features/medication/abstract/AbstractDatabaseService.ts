import PouchDB from 'pouchdb';
import { UuidService } from '../../../core/services/uuid-service/uuid.service';
import { Logger } from '../../../core/util/logger';

/**
 * AbstractDatabaseService
 *
 * Implements methods and properties for interactions with the PouchDB.
 */
export abstract class AbstractDatabaseService {
  protected databaseName: string;
  protected db: PouchDB.Database<{}>;

  protected constructor(
    private readonly uuidService: UuidService,
    databaseName: string
  ) {
    this.databaseName = databaseName;
    this.db = new PouchDB(this.databaseName);
    this.db
      .info()
      .then((response) => this.logDatabaseInfo(response))
      .catch((error) => console.error(error));
  }

  protected logDatabaseInfo(databaseInfo: PouchDB.Core.DatabaseInfo) {
    Logger.info(
      `Database - ${databaseInfo.db_name}: contains ${databaseInfo.doc_count} Documents.`,
      AbstractDatabaseService.name
    );
  }
}

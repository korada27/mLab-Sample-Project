const Joi = require('joi');



var  applicationsQueryString = {

query:{
	
	groups: Joi.string().required(),
    applicationName: Joi.string().empty(""),
	
    applicationId: Joi.number().integer().empty(""),
    filters: Joi.string().empty(""),
    limit: Joi.number().integer().empty(""),
    offset: Joi.number().integer().empty(""),
    userName:Joi.string().empty(""),
    applicationVersion: Joi.string().empty(""),
    softwareType:Joi.string().empty("")
	
}
};

  
var  myapplicationsQueryString = {
	
	query:{
		
	groups: Joi.string().required(),
    limit: Joi.number().integer().empty(""),
    offset: Joi.number().integer().empty(""),
    applicationName : Joi.string().empty("")
		
	}
	
};

var  appManageQueryString = {
	
	query:{
		
		applicationName : Joi.string().required()
		
	}
	
}

var createapplicationstranscations = Joi.object({
  Source: Joi.string(),
  SkipSignOff: Joi.string(),
  SoftwareType: Joi.string(),
  CollectionName: Joi.string(),
  Version: Joi.string(),
  InstallationType: Joi.string(),
  Application_Group: Joi.string(),
  LocalizedName: Joi.string(),
  targetAreas: Joi.array().items(Joi.string()),
  LocalizedDescription: Joi.string(),
  Name: Joi.string(),
  Publisher: Joi.string(),
  Comments: Joi.string(),
  CustomSwitches: Joi.string(),
  TestMachine: Joi.string(),
  Email: Joi.string(),
  DSL: Joi.string(),
  SiteCode: Joi.string(),
  Primary: Joi.string(),
  AdministrativeCategories: Joi.string(),
  Categories: Joi.string(),
  Keywords: Joi.string(),
  DeploymentTypes: Joi.array().min(1).items(Joi.object({
    DTName: Joi.string(),
    ContentPath: Joi.string(),
    InstallString: Joi.string(),
    UnInstallString: Joi.string(),
    OSVersions: Joi.string(),
    Reboot: Joi.string(),
    Runtime: Joi.string(),
    GlobalConditions: Joi.array().min(1).items(Joi.object(
      {
        GCName: Joi.string(),
        GCOperator: Joi.string(),
        GCExpectedValue: Joi.string()
      })),
    DetectionMethods: Joi.array().min(1).items(Joi.object(
      {
        DMPath: Joi.string(),
        DMItem: Joi.string(),
        DMExpectedValue: Joi.string(),
        DMOperator: Joi.string()
      })),

  })),
  requested_by: Joi.string(),
  assigned_to: Joi.string(),
  u_validated_by: Joi.string(),
  u_automation_pkg_no: Joi.string(),
  u_job_id: Joi.string(),
  Work_notes: Joi.string(),
  RFWId: Joi.string(),
  RequestID: Joi.string(),
  PackageID: Joi.string(),
  ContentID: Joi.string(),
  AssignmentID: Joi.string(),
  DSLPath: Joi.string(),
  u_fms_number: Joi.string(),
  RFWTitle: Joi.string(),
  SolutionEngineer: Joi.string(),
  ETCDate: Joi.string(),
  TechnicalContact: Joi.string(),
  RequestManager: Joi.string(),
  RequestedBy: Joi.string(),
  PilotDeploymentStatus: Joi.string(),
  PilotDeploymentStatusComment: Joi.string(),
  PilotDeploymentStatusUpdate: Joi.string(),
  QADeploymentStatus: Joi.string(),
  QADeploymentStatusComment: Joi.string(),
  QADeploymentStatusUpdate: Joi.string(),
  Action: Joi.string(),
  StoppingRunbook: Joi.string(),
  phone: Joi.string(),
  project_name: Joi.string(),
  project_manager: Joi.string(),
  additional_details: Joi.string(),
  location: Joi.string()
});
var  applicationQueryString = Joi.object({

  limit: Joi.number().integer().empty(""),
  offset: Joi.number().integer().empty(""),
  userName:Joi.string().empty(""),
  applicationName: Joi.string().required(),
  applicationVersion: Joi.string().required(),
  applicationPublisher:Joi.string().required()
})
var putApplications = Joi.object().keys({Application_Id: Joi.number().integer(), Application_Build_Configuration: Joi.object().keys({
  Source: Joi.string().empty(''),
  SkipSignOff: Joi.string().empty(''),
  CollectionName: Joi.string().empty(''),
  Version: Joi.string().empty(''),
  Application_Group: Joi.string().empty(''),
  Application_SoftwareType: Joi.string().empty(''),
  InstallationType: Joi.string().empty(''),
  LocalizedName: Joi.string().empty(''),
  targetAreas: Joi.array().items(Joi.string()),
  LocalizedDescription: Joi.string().empty(''),
  Name: Joi.string().empty(''),
  Publisher: Joi.string().empty(''),
  Comments: Joi.string().empty(''),
  CustomSwitches: Joi.string().empty(''),
  TestMachine: Joi.string().empty(''),
  Email: Joi.string().email(),
  DSL: Joi.string().empty(''),
  SiteCode: Joi.string().empty(''),
  Primary: Joi.string().empty(''),
  AdministrativeCategories: Joi.string().empty(''),
  Categories: Joi.string().empty(''),
  Keywords: Joi.string().empty(''),
  DeploymentTypes: Joi.array().items(Joi.object().keys({
    DTName: Joi.string().empty(''),
    ContentPath: Joi.string().empty(''),
    InstallString: Joi.string().empty(''),
    UnInstallString: Joi.string().empty(''),
    OSVersions: Joi.string().empty(''),
    Reboot: Joi.string().empty(''),
    Runtime: Joi.string().empty(''),
    GlobalConditions: Joi.array().items(Joi.object().keys({
      GCName: Joi.string().empty(''),
      GCOperator: Joi.string().empty(''),
      GCExpectedValue: Joi.string().empty('')
    }), Joi.object().keys({
      GCName: Joi.string().empty(''),
      GCOperator: Joi.string().empty(''),
      GCExpectedValue: Joi.string().empty('')
    })),
    DetectionMethods: Joi.array().items(Joi.object().keys({
      DMPath: Joi.string().empty(''),
      DMItem: Joi.string().empty(''),
      DMExpectedValue: Joi.string().empty(''),
      DMOperator: Joi.string().empty('')
    }), Joi.object().keys({
      DMPath: Joi.string().empty(''),
      DMItem: Joi.string().empty(''),
      DMExpectedValue: Joi.string().empty(''),
      DMOperator: Joi.string().empty('')
    }))
  }), Joi.object().keys({
    DTName: Joi.string().empty(''),
    ContentPath: Joi.string().empty(''),
    InstallString: Joi.string().empty(''),
    UnInstallString: Joi.string().empty(''),
    OSVersions: Joi.string().empty(''),
    Reboot: Joi.string().empty(''),
    Runtime: Joi.string().empty(''),
    GlobalConditions: Joi.array().items(Joi.object().keys({
      GCName: Joi.string().empty(''),
      GCOperator: Joi.string().empty(''),
      GCExpectedValue: Joi.string().empty('')
    }), Joi.object().keys({
      GCName: Joi.string().empty(''),
      GCOperator: Joi.string().empty(''),
      GCExpectedValue: Joi.string().empty('')
    }), Joi.object().keys({
      GCName: Joi.string().empty(''),
      GCOperator: Joi.string().empty(''),
      GCExpectedValue: Joi.string().empty('')
    })),
    DetectionMethods: Joi.array().items(Joi.object().keys({
      DMPath: Joi.string().empty(''),
      DMItem: Joi.string().empty(''),
      DMExpectedValue: Joi.string().empty(''),
      DMOperator: Joi.string().empty('')
    }), Joi.object().keys({
      DMPath: Joi.string().empty(''),
      DMItem: Joi.string().empty(''),
      DMExpectedValue: Joi.string().empty(''),
      DMOperator: Joi.string().empty('')
    }))
  }), Joi.object().keys({
    DTName: Joi.string().empty(''),
    ContentPath: Joi.string().empty(''),
    InstallString: Joi.string().empty(''),
    UnInstallString: Joi.string().empty(''),
    OSVersions: Joi.string().empty(''),
    Reboot: Joi.string().empty(''),
    Runtime: Joi.string().empty(''),
    GlobalConditions: Joi.array().items(Joi.object().keys({
      GCName: Joi.string().empty(''),
      GCOperator: Joi.string().empty(''),
      GCExpectedValue: Joi.string().empty('')
    })),
    DetectionMethods: Joi.array().items(Joi.object().keys({
      DMPath: Joi.string().empty(''),
      DMItem: Joi.string().empty(''),
      DMExpectedValue: Joi.string().empty(''),
      DMOperator: Joi.string().empty('')
    }), Joi.object().keys({
      DMPath: Joi.string().empty(''),
      DMItem: Joi.string().empty(''),
      DMExpectedValue: Joi.string().empty(''),
      DMOperator: Joi.string().empty('')
    }), Joi.object().keys({
      DMPath: Joi.string().empty(''),
      DMItem: Joi.string().empty(''),
      DMExpectedValue: Joi.string().empty(''),
      DMOperator: Joi.string().empty('')
    }))
  })),
  requested_by: Joi.string().empty(''),
  assigned_to: Joi.string().empty(''),
  u_validated_by: Joi.string().empty(''),
  u_automation_pkg_no: Joi.string().empty(''),
  u_job_id: Joi.string().empty(''),
  Work_notes: Joi.string().empty(''),
  RFWId: Joi.string().empty(''),
  RequestID: Joi.string().empty(''),
  PackageID: Joi.string().empty(''),
  ContentID: Joi.string().empty(''),
  AssignmentID: Joi.string().empty(''),
  DSLPath: Joi.string().empty(''),
  u_fms_number: Joi.string().empty(''),
  RFWTitle: Joi.string().empty(''),
  SolutionEngineer: Joi.string().empty(''),
  ETCDate: Joi.string().empty(''),
  TechnicalContact: Joi.string().empty(''),
  RequestManager: Joi.string().empty(''),
  RequestedBy: Joi.string().empty(''),
  PilotDeploymentStatus: Joi.string().empty(''),
  PilotDeploymentStatusComment: Joi.string().empty(''),
  PilotDeploymentStatusUpdate: Joi.string().empty(''),
  QADeploymentStatus: Joi.string().empty(''),
  QADeploymentStatusComment: Joi.string().empty(''),
  QADeploymentStatusUpdate: Joi.string().empty(''),
  Action: Joi.string().empty(''),
  StoppingRunbook: Joi.string().empty(''),
  phone: Joi.string().empty(''),
  project_name: Joi.string().empty(''),
  project_manager: Joi.string().empty(''),
  additional_details: Joi.string().empty(''),
  location: Joi.string().empty('')
})})

module.exports.applicationsQueryString = applicationsQueryString;
module.exports.appManageQueryString = appManageQueryString;
module.exports.applicationQueryString=applicationQueryString;
module.exports.myapplicationsQueryString = myapplicationsQueryString;
module.exports.createapplicationstranscations = createapplicationstranscations;
module.exports.putApplications = putApplications;

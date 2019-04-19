export const PEOPLE_DATA_2 = [{
  name: 'Kelley Roxbee',
  email: 'kroxbee0@example.com',
  phone: '555-555-5555',
  gender: 'Male'
}, {
  name: 'Loralie Archibould',
  email: 'larchibould1@example.com',
  gender: 'Female'
}, {
  name: 'Gene Regorz',
  email: 'gregorz2@example.com',
  phone: '555-555-5555',
  gender: 'Male'
}, {
  name: 'Stan Clarkin',
  email: 'sclarkin3@example.com',
  phone: '555-555-5555',
  gender: 'Male'
}, {
  name: 'Carolyne Juden',
  email: 'cjuden4@example.com',
  phone: '555-555-5555',
  gender: 'Female'
}];

export const PEOPLE_DATA = [{
  name: 'Vicki Rohlfs',
  job_title: 'VP Marketing',
  email: 'vrohlfs0@example.com',
  company: 'Weimann Group'
}, {
  name: 'Nicol Tanslie',
  job_title: 'Systems Administrator III',
  email: 'ntanslie1@example.com',
  company: 'Jakubowski Inc'
}, {
  name: 'Stacia Mardlin',
  job_title: 'Senior Cost Accountant',
  email: 'smardlin2@example.com',
  company: 'Jacobs, Kirlin and Runte'
}, {
  name: 'Carlos St Leger',
  job_title: 'Assistant Manager',
  email: 'cst3@example.com',
  company: 'Torp Inc'
}, {
  name: 'Kaye Swabey',
  job_title: 'Data Coordiator',
  email: 'kswabey4@example.com',
  company: 'Lesch Group'
}, {
  name: 'Jose McGahy',
  job_title: 'Systems Administrator I',
  email: 'jmcgahy5@example.com',
  company: 'Runolfsdottir, Simonis and Bednar'
}, {
  name: 'Emalia Warnes',
  job_title: 'Quality Engineer',
  email: 'ewarnes6@example.com',
  company: 'Gusikowski-Glover'
}, {
  name: 'Tera Huffa',
  job_title: 'Project Manager',
  email: 'thuffa7@example.com',
  company: 'Stiedemann Inc'
}, {
  name: 'Maudie Paireman',
  job_title: 'VP Sales',
  email: 'mpaireman8@example.com',
  company: 'Runolfsdottir-Mraz'
}, {
  name: 'Blake Cossans',
  job_title: 'Account Coordinator',
  email: 'bcossans9@example.com',
  company: 'Frami LLC'
}];

export const CHANNEL_DATA = [
  {
    id: 'turner.nba-lp-away-15',
    version: '21',
    blueprint: {
      id: 'nba_blueprint_test',
      version: '1'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'on',
      regions: {
        'aws-west-isp': {
          channel_state: 'on',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          }
        },
        'aws-east-isp': {
          channel_state: 'on',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'jwong_fubo_test',
    version: '15',
    blueprint: {
      id: 'fubo_nba_2018',
      version: '6'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'jwong_turner_test',
    version: '21',
    blueprint: {
      id: 'nba_blueprint',
      version: '10'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        pub_cluster_id: 'aws-old-prod',
        MasterClockSync: {
          MasterClockSyncSource: 'SeiPicTiming',
          MasterClockSyncTimeout: 5000,
          MasterClockSyncTimeZone: -4
        }
      }
    }
  },
  {
    id: 'mswartzendruber_version_six_test',
    version: '14',
    blueprint: {
      id: 'jw_mc_blueprint',
      version: '3'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'jwong_turner_inc_test_v8',
    version: '21',
    blueprint: {
      id: 'nba_blueprint',
      version: '8'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-east-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applying',
            channel_state: 'off'
          }
        }
      }
    }
  },
  {
    id: 'dcaiafa_test',
    version: '23',
    blueprint: {
      id: 'nba_blueprint',
      version: '13'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'jwong_isp_test',
    version: '21',
    blueprint: {
      id: 'nba_blueprint',
      version: '15'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-east-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'aws-east-isp': {
        pub_cluster_id: 'aws-use1-prod'
      }
    }
  },
  {
    id: 'cnngo_slated_east',
    version: '14',
    blueprint: {
      id: 'cnn_blueprint',
      version: '3'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-east-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-east-isp': {
        pub_cluster_id: 'aws-use1-prod'
      }
    }
  },
  {
    id: 'cnngo_noslate_east',
    version: '14',
    blueprint: {
      id: 'cnn_blueprint',
      version: '3'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-east-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-east-isp': {
        pub_cluster_id: 'aws-use1-prod'
      }
    }
  },
  {
    id: 'cnni_slated_east',
    version: '12',
    blueprint: {
      id: 'cnn_blueprint',
      version: '3'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-east-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-east-isp': {
        pub_cluster_id: 'aws-use1-prod'
      }
    }
  },
  {
    id: 'hln_slated_east',
    version: '12',
    blueprint: {
      id: 'cnn_blueprint',
      version: '3'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-east-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-east-isp': {
        pub_cluster_id: 'aws-use1-prod'
      }
    }
  },
  {
    id: '60fps_vegas_test',
    version: '13',
    blueprint: {
      id: 'fubo_nba_vegas_2018',
      version: '4'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: '60fps_fubo_vegas_hou',
    version: '8',
    blueprint: {
      id: 'fubo_nba_vegas_2018',
      version: '4'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'matts_playback_test',
    version: '1',
    blueprint: {
      id: 'fubo_nba_2018',
      version: '8'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'media-tag-test',
    version: '4',
    blueprint: {
      id: 'nba_blueprint',
      version: '18'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'spark-test',
    version: '6',
    blueprint: {
      id: 'cnn_blueprint',
      version: '3'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'nba-60fps-test-ao',
    version: '2',
    blueprint: {
      id: 'nba_blueprint',
      version: '19'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'nba_60fps_test',
    version: '7',
    blueprint: {
      id: 'nba_blueprint',
      version: '21'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'mml-60fps-test-turner.DAL-PGM',
    version: '2',
    blueprint: {
      id: 'nba_blueprint',
      version: '21'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'nba_60fps_test_2',
    version: '2',
    blueprint: {
      id: 'nba_blueprint',
      version: '21'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'mml-60fps-test-turner.Spanish-1',
    version: '1',
    blueprint: {
      id: 'nba_blueprint',
      version: '21'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'westmmltest101',
    version: '8',
    blueprint: {
      id: 'mml',
      version: '11'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-east-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        },
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        source: 'turner.ou08',
        pub_cluster_id: 'aws-old-prod'
      },
      'aws-east-isp': {
        source: 'turner.ou08',
        pub_cluster_id: 'aws-use1-prod'
      }
    }
  },
  {
    id: 'dualmmltestou08',
    version: '5',
    blueprint: {
      id: 'mml',
      version: '11'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-east-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        },
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        source: 'turner.ou08',
        pub_cluster_id: 'aws-old-prod'
      },
      'aws-east-isp': {
        source: 'turner.ou08',
        pub_cluster_id: 'aws-use1-prod'
      }
    }
  },
  {
    id: 'ao_test',
    version: '5',
    blueprint: {
      id: 'ao_test',
      version: '2'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        source: 'turner.ATL-PGM',
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'dtaylor_spark_testing',
    version: '2',
    blueprint: {
      id: 'spark_testing',
      version: '3'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'smokeTest',
    version: '1',
    blueprint: {
      id: 'spark_testing',
      version: '3'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'ao_test2',
    version: '5',
    blueprint: {
      id: 'mml',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        source: 'turner.mml205_primary',
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'ao-mml-60fps-test',
    version: '10',
    blueprint: {
      id: 'mml-60fps',
      version: '6'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        },
        'aws-east-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        source: 'turner.ATL-PGM',
        pub_cluster_id: 'aws-old-prod'
      },
      'aws-east-isp': {
        source: 'turner.ATL-PGM',
        pub_cluster_id: 'aws-use1-prod'
      }
    }
  },
  {
    id: 'ao-mml-60fps-test-west',
    version: '10',
    blueprint: {
      id: 'mml-60fps',
      version: '6'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        source: 'turner.mml805_primary',
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'crossTest-primary',
    version: '3',
    blueprint: {
      id: 'mml-60fps',
      version: '6'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        source: 'turner.DET-PGM',
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'crossTest-secondary',
    version: '4',
    blueprint: {
      id: 'mml-60fps',
      version: '6'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-east-isp': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-east-isp': {
        source: 'turner.DET-PGM',
        pub_cluster_id: 'aws-use1-prod'
      }
    }
  },
  {
    id: 'ao-nba',
    version: '1',
    blueprint: {
      id: 'nba_60fps',
      version: '2'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        },
        'aws-east-isp': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        pub_cluster_id: 'aws-old-prod'
      },
      'aws-east-isp': {
        pub_cluster_id: 'aws-use1-prod'
      }
    }
  },
  {
    id: 'vegasOU05',
    version: '3',
    blueprint: {
      id: 'mml',
      version: '14'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-mml': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-mml': {
        source: 'turner.ou05',
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'nba60ptest',
    version: '1',
    blueprint: {
      id: 'nba_60fps',
      version: '2'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'reconciling',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'reconciling'
          },
          pub: {
            config_state: 'applying',
            channel_state: 'off'
          }
        },
        'aws-east-isp': {
          channel_state: 'reconciling',
          config_state: 'saved',
          ingest: {
            config_state: 'saved',
            channel_state: 'reconciling'
          },
          pub: {
            config_state: 'applying',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-east-isp': {
        pub_cluster_id: 'aws-use1-prod'
      },
      'vegas-multicast': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'nba60fpstest',
    version: '3',
    blueprint: {
      id: 'nba_60fps',
      version: '2'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          }
        },
        'aws-east-isp': {
          channel_state: 'off',
          config_state: 'saved',
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          },
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-east-isp': {
        pub_cluster_id: 'aws-use1-prod'
      },
      'vegas-multicast': {
        pub_cluster_id: 'aws-old-prod'
      }
    }
  },
  {
    id: 'pe-test01',
    version: '3',
    blueprint: {
      id: 'spark_testing',
      version: '7'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-west-isp': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-west-isp': {
        source: 'turner.ATL-PGM',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'jw_test5689',
    version: '12',
    blueprint: {
      id: 'nba_blueprint',
      version: '30'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'aws-east-isp': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'aws-east-isp': {
        pub_cluster_id: 'aws-use1-prod'
      }
    }
  },
  {
    id: 'pe-test04',
    version: '1',
    blueprint: {
      id: 'spark_testing',
      version: '7'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-multicast': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'saved',
            channel_state: 'off'
          },
          ingest: {
            config_state: 'applied',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-multicast': {
        source: 'nba.BOS-GDC',
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'jgodin-nba_blueprint-test',
    version: '4',
    blueprint: {
      id: 'nba_blueprint',
      version: '30'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-mml': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-mml': {
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
  {
    id: 'jgodin-nba_60fps-test',
    version: '5',
    blueprint: {
      id: 'nba_60fps',
      version: '5'
    },
    distributor_id: 'istreamplanet.internal',
    state: {
      desired_state: 'off',
      regions: {
        'vegas-mml': {
          channel_state: 'off',
          config_state: 'saved',
          pub: {
            config_state: 'applied',
            channel_state: 'on'
          },
          ingest: {
            config_state: 'saved',
            channel_state: 'off'
          }
        }
      }
    },
    metadata: {
      'vegas-mml': {
        pub_cluster_id: 'aws-usw2-prod-g'
      }
    }
  },
];
